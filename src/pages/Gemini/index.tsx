import {
  CopyOutlined,
  FileTextOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import type { FC } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useTranslation } from "react-i18next";
import { askGemini } from "../../api/gemini";
import type { GeminiPageProps } from "./types";
import { Flex } from "antd";
import styles from "./styles.module.css";

const STORAGE_KEY = "portfolio.gemini.latestResponse";

export const GeminiPage: FC<GeminiPageProps> = () => {
  const { t } = useTranslation();
  const [jobDescription, setJobDescription] = useState<string>("");
  const [aiOutput, setAiOutput] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const outputMarkdownRef = useRef<HTMLDivElement | null>(null);

  const canCopy = useMemo(() => aiOutput.trim().length > 0, [aiOutput]);

  useEffect(() => {
    if (!copied) return;

    const timeoutId = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeoutId);
  }, [copied]);

  const onCopy = async () => {
    if (!canCopy || loading) return;
    try {
      const renderedText = outputMarkdownRef.current?.innerText?.trim();
      const textToCopy = renderedText && renderedText.length > 0 ? renderedText : aiOutput;

      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
    } catch {
      // no-op (clipboard can fail without user gesture / permissions)
    }
  };

  const onGenerate = async () => {
    const jd = jobDescription.trim();
    if (!jd || loading) return;

    try {
      setError(null);
      setLoading(true);
      setAiOutput("");

      const prompt = `
          You are a professional copywriter.
          Create a tailored cover letter using this job description:
          
          ${jd}
        `;

      const result = await askGemini(prompt);

      setAiOutput(result);
      try {
        localStorage.setItem(STORAGE_KEY, result);
      } catch {
        // ignore storage errors (quota, blocked, etc.)
      }
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : "Error generating content";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex justify="center" className={styles.root}>
      <div className={styles.frame}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <div className={styles.title}>{t("gemini.title")}</div>
            <div className={styles.subtitle}>{t("gemini.subtitle")}</div>
          </div>

          <div className={styles.headerIcon} aria-hidden="true">
            <FileTextOutlined />
          </div>
        </header>

        <section className={styles.section}>
          <div className={styles.sectionLabel}>{t("gemini.jobDescriptionTitle")}</div>
          <div className={styles.textareaCard}>
            <textarea
              className={styles.textarea}
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder={t("gemini.placeholders.jobDescription")}
              spellCheck={false}
              disabled={loading}
            />
          </div>
        </section>

        <section className={styles.section}>
          <Flex justify="space-between" className={styles.sectionHeaderRow}>
            <div className={styles.sectionLabel}>{t("gemini.outputTitle")}</div>
            <button
              className={[styles.copyLink, copied ? styles.copyLinkCopied : ""]
                .filter(Boolean)
                .join(" ")}
              type="button"
              onClick={onCopy}
              disabled={!canCopy || loading}
            >
              <CopyOutlined />
              <span>{copied ? t("gemini.copied") : t("gemini.copy")}</span>
            </button>
          </Flex>

          <div className={styles.outputCard} data-empty={!aiOutput}>
            {loading ? (
              <div className={styles.outputText}>{t("gemini.loading")}</div>
            ) : error ? (
              <div className={styles.outputText}>
                {t("gemini.errorTitle")}: {error}
              </div>
            ) : aiOutput ? (
              <div className={styles.outputMarkdown} ref={outputMarkdownRef}>
                <ReactMarkdown>{aiOutput}</ReactMarkdown>
              </div>
            ) : (
              <div className={styles.outputText}>{t("gemini.placeholders.aiOutput")}</div>
            )}
            <div className={styles.outputUnderline} aria-hidden="true" />
          </div>
        </section>

        <div className={styles.ctaRow}>
          <button
            className={styles.ctaButton}
            onClick={onGenerate}
            type="button"
            disabled={loading || !jobDescription.trim()}
          >
            <span>{loading ? t("gemini.generating") : t("gemini.generate")}</span>
            <ThunderboltOutlined
              className={[styles.ctaIcon, loading ? styles.ctaIconLoading : ""]
                .filter(Boolean)
                .join(" ")}
            />
          </button>
        </div>
      </div>
    </Flex>
  );
};
