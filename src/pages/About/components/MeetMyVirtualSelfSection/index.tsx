import { PlayCircleFilled, PauseCircleOutlined } from "@ant-design/icons";
import { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { askGemini } from "../../../../api/gemini";
import video from "../../../../assets/video.mp4";
import { Button, Card, Flex, Input, Space, Typography } from "antd";
import { CV_PROMPT_PREFIX } from "../../constant";
import { Reveal } from "../Reveal";
import styles from "./styles.module.css";

const sectionHeadingId = "about-meet-virtual-heading";
const responseHeadingId = "about-ai-response-heading";

export const MeetMyVirtualSelfSection = () => {
  const [prompt, setPrompt] = useState("");
  const [aiOutput, setAiOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onAsk = async () => {
    const q = prompt.trim();
    if (!q || loading) return;

    setError(null);
    setLoading(true);
    setAiOutput("");

    try {
      const text = await askGemini(`${CV_PROMPT_PREFIX}\n\n${q}`);
      setAiOutput(text.trim());
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Request failed.");
    } finally {
      setLoading(false);
    }
  };

  const handlePlay = async () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await videoRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.log("Video play blocked:", err);
      }
    }
  };

  const displayMarkdown = aiOutput || error || "";

  return (
    <section aria-labelledby={sectionHeadingId} role="region">
      <Reveal>
        <Card bordered={false} className={styles.card}>
          <Typography.Title
            level={3}
            id={sectionHeadingId}
            className={styles.virtualTitle}
          >
            Meet My Virtual Self
          </Typography.Title>

          {/* VIDEO SECTION */}
          <Reveal index={1} className={styles.videoReveal}>
            <div className={styles.videoBox}>
              <div className={styles.videoImageWrap}>
                <video
                  ref={videoRef}
                  src={video}
                  className={styles.videoImage}
                  onEnded={() => setIsPlaying(false)}
                />
              </div>

              <Button
                type="text"
                className={styles.playOverlay}
                aria-label="Play video"
                onClick={handlePlay}
              >
                <span className={styles.playGlyphWrap}>
                  {isPlaying ? <PauseCircleOutlined /> : <PlayCircleFilled />}
                </span>
              </Button>
            </div>
          </Reveal>

          {/* CHAT INPUT */}
          <Reveal index={2} className={styles.chatReveal}>
            <Space.Compact className={styles.chatRow}>
              <Input
                className={styles.chatInput}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ask about my CV"
                disabled={loading}
                onPressEnter={() => void onAsk()}
                size="large"
              />

              <Button
                type="default"
                onClick={() => void onAsk()}
                disabled={loading || !prompt.trim()}
                aria-label="Send question"
                size="large"
                className={styles.sendBtnMin}
              >
                Send
              </Button>
            </Space.Compact>
          </Reveal>

          {/* AI RESPONSE */}
          <Reveal index={3} className={styles.responseReveal}>
            <div
              className={styles.responseBox}
              role="region"
              aria-labelledby={responseHeadingId}
            >
              <Typography.Title
                level={5}
                id={responseHeadingId}
                className={styles.responseHeading}
              >
                AI Response
              </Typography.Title>

              {loading ? (
                <Typography.Paragraph className={styles.responseText}>
                  Thinking…
                </Typography.Paragraph>
              ) : displayMarkdown ? (
                <div className={styles.responseMarkdown}>
                  <ReactMarkdown>{displayMarkdown}</ReactMarkdown>
                </div>
              ) : (
                <Typography.Paragraph className={styles.responseText}>
                  Ask a question to see Gemini-powered answers grounded in
                  CV-style context.
                </Typography.Paragraph>
              )}
            </div>
          </Reveal>

          {/* FOOTER */}
          <Reveal index={4} className={styles.footerReveal}>
            <Flex
              justify="space-between"
              align="center"
              gap={12}
              wrap
              className={styles.virtualFooter}
            >
              <Typography.Text className={styles.poweredBy}>
                Powered by{" "}
                <span className={styles.poweredAccent}>Gemini AI</span>
              </Typography.Text>

              <Link to="/gemini">
                <Button type="link" className={styles.integrationLink}>
                  Integration pro &gt;
                </Button>
              </Link>
            </Flex>
          </Reveal>
        </Card>
      </Reveal>
    </section>
  );
};
