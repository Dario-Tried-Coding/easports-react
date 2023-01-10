import { useRef } from "react";

const safeDocument = document !== undefined ? document : {};

function useScrollBlock(ref) {
  const scrollBlocked = useRef();
  const html = safeDocument.documentElement;
  const { body } = safeDocument;

  const blockScroll = () => {
    if (!body || !body.style || scrollBlocked.current) return;

    html.style.position = "relative"
    html.style.overflow = "hidden"
    body.style.position = "relative"
    body.style.overflow = "hidden"
    ref.current.nextElementSibling.style["pointer-events"] = "none"

    // @ts-ignore
    scrollBlocked.current = true
  };

  const allowScroll = () => {
    if (!body || !body.style || !scrollBlocked.current) return;

    html.style.position = '';
    html.style.overflow = '';
    body.style.position = '';
    body.style.overflow = '';
    ref.current.nextElementSibling.style["pointer-events"] = "auto"

    // @ts-ignore
    scrollBlocked.current = false;
  }

  return [blockScroll, allowScroll];
}

export default useScrollBlock;
