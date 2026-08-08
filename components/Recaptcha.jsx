"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

const SCRIPT_ID = "google-recaptcha-script";
const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "YOUR_RECAPTCHA_SITE_KEY_HERE";

function loadRecaptchaScript() {
  if (document.getElementById(SCRIPT_ID)) return;
  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

/**
 * Renders the Google reCAPTCHA v2 checkbox widget.
 * Exposes a `reset()` method via ref so callers can clear the widget after a submit attempt.
 */
const Recaptcha = forwardRef(function Recaptcha({ onChange }, ref) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const onChangeRef = useRef(onChange);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (window.grecaptcha && widgetIdRef.current !== null) {
        window.grecaptcha.reset(widgetIdRef.current);
      }
    },
  }));

  useEffect(() => {
    let cancelled = false;
    let pollId = null;

    const renderWidget = () => {
      if (cancelled || widgetIdRef.current !== null || !containerRef.current) return;
      widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
        sitekey: SITE_KEY,
        callback: (token) => onChangeRef.current(token),
        "expired-callback": () => onChangeRef.current(""),
        "error-callback": () => onChangeRef.current(""),
      });
    };

    if (window.grecaptcha && window.grecaptcha.render) {
      renderWidget();
    } else {
      loadRecaptchaScript();
      pollId = setInterval(() => {
        if (window.grecaptcha && window.grecaptcha.render) {
          clearInterval(pollId);
          renderWidget();
        }
      }, 200);
    }

    return () => {
      cancelled = true;
      if (pollId) clearInterval(pollId);
    };
  }, []);

  return <div ref={containerRef} />;
});

export default Recaptcha;
