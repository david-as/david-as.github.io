"use client"

import { useState, useEffect } from "react"

export default function DebugInfo() {
  const [info, setInfo] = useState<string>("Loading debug info...")

  useEffect(() => {
    try {
      const debugInfo = {
        url: window.location.href,
        pathname: window.location.pathname,
        htmlLang: document.documentElement.lang,
        userAgent: navigator.userAgent,
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        time: new Date().toISOString(),
      }

      setInfo(JSON.stringify(debugInfo, null, 2))
    } catch (error) {
      setInfo(`Error getting debug info: ${error}`)
    }
  }, [])

  if (process.env.NODE_ENV === "production") {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 p-4 bg-black/80 text-white rounded-lg max-w-md max-h-80 overflow-auto text-xs">
      <h3 className="font-bold mb-2">Debug Info</h3>
      <pre>{info}</pre>
    </div>
  )
}
