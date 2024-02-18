import Prism from "prismjs";
import "prismjs/components/prism-css";
import "./prism-nord.css";
import { useEffect } from "react";

const CodeHighlighter = ({ codeString }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <pre className="language-css">
      <code className="language-css">{codeString}</code>
    </pre>
  );
};

export default CodeHighlighter;
