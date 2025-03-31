import { useEffect, useRef, useState } from "react";

const Demo = () => {
  const bodyHeight = useRef(document.body.clientHeight);
  const [inputFocus, setInputFocus] = useState(false);

  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    if (isIOS) {
      setTimeout(() => {
        const currentHeight = document.body.clientHeight;
        const diff = bodyHeight.current - currentHeight;
        console.log("键盘抬起高度diff %s", diff);
      }, 170);
    }
  }, [inputFocus])

  return (
    <input
      type="text"
      onFocus={() => setInputFocus(true)}
      onBlur={() => setInputFocus(false)}
    />
  );
};

