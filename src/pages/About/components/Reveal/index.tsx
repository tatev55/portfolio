import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type FC,
  type ReactNode,
} from "react";
import styles from "./styles.module.css";

export type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  index?: number;
  onVisibleChange?: (visible: boolean) => void;
};

const getDelayClass = (index?: number) => {
  if (index == null || index <= 0) {
    return undefined;
  }

  const delayIndex = Math.min(index, 12);
  return styles[`delay${delayIndex}` as keyof typeof styles];
};

export const Reveal: FC<RevealProps> = ({
  children,
  className,
  as: Tag = "div",
  index,
  onVisibleChange,
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const visibleRef = useRef(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || visibleRef.current) {
          return;
        }

        visibleRef.current = true;
        setVisible(true);
        onVisibleChange?.(true);
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [onVisibleChange]);

  const classNames = [
    styles.reveal,
    visible && styles.revealVisible,
    getDelayClass(index),
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref as never} className={classNames}>
      {children}
    </Tag>
  );
};
