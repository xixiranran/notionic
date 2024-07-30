import * as React from "react"
const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" {...props}>
    <g className="layer">
      <title>{"Layer 1"}</title>
      <g fill="#00F">
        <path d="M69.53 12.44c2.11.17 4.17.47 6.24.91.28.06.56.11.85.18a258.85 258.85 0 0 1 3.63.76c17.43 3.69 17.43 3.69 19.26 6.44.5 3.16-.7 5.66-2.49 8.18-1.63 2.13-3.3 4.11-5.36 5.84-.58.5-1.16 1.01-1.74 1.52-3.71 3.28-7.66 6.16-12.1 8.38-.14 4.21.1 8.37.42 12.56l.06.79c.28 5.64.28 5.64 2.08 10.89.18-.17.37-.35.57-.53 1.39-1.27 2.8-2.51 4.27-3.69 1.63-1.32 3.21-2.69 4.8-4.06 1.2-1.06 2.41-2.1 3.63-3.13 3.76-3.19 7.27-6.51 9.05-11.23-.06-1.24-.38-1.73-1.27-2.55v-.64c3.43-.28 7.42.82 10.2 2.87.9.86 1.24 1.26 1.37 2.5-.26 2.75-3.02 4.99-5 6.7-.83.68-1.67 1.36-2.51 2.04-1.41 1.14-2.74 2.35-4.06 3.59a77.007 77.007 0 0 1-4.84 4.2c-.67.55-1.32 1.1-1.96 1.67-5.01 4.43-10.92 8.7-17.94 8.28-2.23-.2-3.42-1.21-4.87-2.85l-.76-.85c-.57-.72-.57-.72-.57-1.36-.22.1-.43.2-.65.3-5.54 2.55-11.11 4.77-16.89 6.72-.43.14-.43.14-.87.29-17.75 6.04-17.75 6.04-24.97 2.89-2.16-1.14-3.93-3.03-4.87-5.3-.53-1.71-.62-3.52-.77-5.29l-.06-.69c-.59-6.66-.41-13.34-.33-20.02.03-1.79.05-3.57.05-5.36.01-.82.03-1.64.04-2.46.04-3.9-.41-7.22-3.01-10.32-.96-.98-2.02-1.78-3.17-2.54.1-.43.21-.84.32-1.28 3.6-.3 6.79 1.28 9.57 3.51 3.53 3.13 4.55 8.91 5.1 13.4.02.73.03 1.46.03 2.2 0 .21-.01.41-.01.63v1.34c-.01.72-.02 1.43-.02 2.15 0 2.03-.02 4.07-.03 6.11-.1 10-.1 10 1.44 19.86.18.88.18.88.18 2.15 4.83-.02 9.49-1.84 14-3.39.39-.13.39-.13.79-.27 1.56-.55 2.94-1.21 4.35-2.08-.09-.27-.09-.27-.19-.54-.75-2.34-1.11-4.68-1.4-7.11-.31.15-.61.3-.92.46-1.55.77-3.1 1.09-4.82.81-.19-.15-.38-.31-.56-.47-1.02-.69-2.02-.63-3.21-.64-2.08-.03-3.93-.21-5.48-1.76-.07-.76-.08-1.49-.07-2.25v-.75c.06-4.2.3-8.4.51-12.6.06-1.19.12-2.38.17-3.58.12-2.32.23-4.65.34-6.97 2.67.33 3.8 1.3 5.45 3.38 1.57 2.19 1.57 2.19 1.57 3 2.45-.43 2.45-.43 4.79-1.28-.21-.06-.41-.12-.62-.19-.27-.08-.53-.16-.8-.25-.26-.08-.52-.16-.8-.25-.65-.27-.65-.27-.97-.9-.04-.64-.05-1.28-.04-1.92v-.62c0-1.41.06-2.81.14-4.22.25-4.64.05-8.58-1.08-13.09l-.3-1.2-1.01-.06c-1.25-.06-2.48-.13-3.73-.2l-1.61-.09-2.31-.12c-.24-.01-.48-.03-.73-.04-1.7-.09-1.7-.09-2.41-.45l.32-.96c2.11-.99 4.33-1.34 6.62-1.72.39-.07.78-.14 1.18-.21.82-.14 1.64-.29 2.46-.43 1.25-.21 2.5-.43 3.74-.64.8-.14 1.6-.28 2.41-.42.36-.06.73-.12 1.11-.19 8.68-1.48 8.68-1.48 10.54-.85.98.81.98.81 1.6 1.59-3.53 3.05-9.28 3.31-13.71 4.15.12.23.25.46.38.7 2.63 4.79 5.1 9.74 5.07 15.33v1.12c-.01.57-.01.57-.01 1.15-.01.38-.01.77-.01 1.17 0 .95-.01 1.9-.01 2.85.33-.09.67-.17 1.01-.26 4.73-1.24 4.73-1.24 6.96-1.33.3-.02.59-.03.9-.05 2.94-.09 2.94-.09 4.2 1.01.76 1.13.79 1.53.64 2.87-.36.83-.73 1.57-1.2 2.35-.12.22-.25.44-.38.66-1.5 2.55-3.29 4.88-5.12 7.19l-.41.53c-1.93 2.46-1.93 2.46-2.46 2.98 0 2.35.66 4.47 1.44 6.66.2.58.4 1.17.61 1.75.09.25.18.51.27.77.22.66.39 1.31.55 1.98.31-.11.61-.23.93-.34 3.12-1.14 5.66-1.61 8.96-.93-.03-.38-.07-.76-.11-1.14l-.42-4.29c-.05-.61-.11-1.22-.18-1.84-1.16-11.89-1.28-23.79-1.13-35.74.01-.71.01-1.42.02-2.13.01-1.13.02-2.25.04-3.38.01-.62.02-1.24.02-1.86.01-.37.01-.74.02-1.13l.02-.99c.04-.25.08-.5.13-.77.95-.63.95-.63 1.91-.63v-.64zm2.23 2.55c.18.38.18.38.37.77 3.16 7.2 3.69 15.42 4.74 23.15 1.76-1.12 3.39-2.28 4.9-3.73l.53-.49c.53-.51 1.06-1.01 1.58-1.52.25-.23.25-.23.5-.47 2.83-2.69 5.63-5.55 5.98-9.62-.78-2-2.71-2.58-4.58-3.43-3.44-1.45-7.01-2.58-10.55-3.75-.32-.11-.64-.21-.98-.32-.82-.25-1.64-.44-2.49-.59zm-16.6 29.46c-.39.1-.79.2-1.2.3-.41.11-.83.21-1.25.32-3.11.8-6.15 1.43-9.33 1.82v.84c.05 10.31.05 10.31-.32 14.78 1.14-.47 1.78-1.12 2.59-2.05.22-.25.44-.5.66-.76.92-1.11 1.3-1.72 1.25-3.15-.01-.38-.01-.38-.01-.78l-.03-.59c.23-.07.45-.14.68-.22 1.1-.51 1.9-1.21 2.77-2.03.17-.16.33-.32.51-.48 2.6-2.47 4.54-4.95 6.25-8.12-.95-.47-1.55-.14-2.57.12zM83.88 89.15c3.45 3.08 5.55 8.21 5.81 12.77.01.57.01.57.01 1.16l.03 1.17c-.1 1-.1 1-.53 1.6-1.27.86-2.65.75-4.12.76-.24 0-.47.01-.72.02-1.66.01-2.87-.17-4.31-1.06-.39-.85-.59-1.44-.75-2.33-.08-.34-.08-.34-.16-.69-.3-1.46-.44-2.9-.5-4.39-.1-2.25-.82-3.98-1.77-5.98l-.32-.96c-.81.11-1.19.21-1.73.83-2.03 3.45-3.41 7.22-4.89 10.93-.15.38-.3.76-.46 1.15-.3.75-.59 1.49-.89 2.23-2.25 5.63-2.25 5.63-3.83 6.63-2.1.78-4.98.44-7.02-.4-.82-.63-.94-.92-1.28-1.91l-.06-2.24c-.25-5.73-1.45-13.23-5.02-17.9-.66-.91-.66-.91-.6-1.85.09-.22.17-.44.26-.66 2.55-.22 4.47.67 6.42 2.29 3.27 3.07 5.27 7.01 6.98 11.11.23-.33.45-.66.69-.99 1.04-1.48 2.09-2.96 3.13-4.44.18-.25.37-.51.55-.77 5.09-7.19 5.09-7.19 7.03-8.38 2.94-.28 5.72.53 8.05 2.3zM96.96 83.88c3.7 1.32 5.74 4.44 7.41 7.82.97 2.08 1.71 4.16 2.34 6.37.09.34.18.66.28 1 1.32 4.7 2.46 9.45 2.49 14.34 0 .26.01.52.02.79.01 1.62-.16 2.73-1.06 4.13-1.23 1.01-2.58 1.31-4.14 1.28-1.97-.3-3.78-1-5.21-2.41-.68-1-.75-1.74-.88-2.93l-.15-1.29c-.02-.23-.04-.45-.07-.68-.12-1.08-.26-2.16-.41-3.25-.03-.21-.05-.43-.08-.66-.65-4.88-1.41-9.73-2.36-14.56-.04-.24-.09-.49-.14-.74-.55-2.84-.55-2.84-1.26-5.63-.26-.93-.36-1.64-.33-2.6.01-.25.01-.49.02-.75.01-.18.01-.36.02-.55 1.14-.56 2.34-.02 3.51.32zM30.99 86.67c2.56.26 4.6 1.08 6.39 2.97 2.77 3.55 3.95 7.67 3.91 12.1-.01.35-.01.7-.01 1.06-.08 3.71-.52 10.17-3.33 12.98-5.4.32-5.4.32-7.33-.64-1.03-.94-1.26-1.42-1.35-2.83.03-.49.07-.97.11-1.46l.06-.8c.11-1.42.25-2.83.39-4.25.32-3.17.54-6.32.55-9.52 0-.32.01-.64.01-.97-.01-2.57-.23-5.15-1.05-7.6.54-.66.79-.94 1.65-1.04zm0 0" />
      </g>
    </g>
  </svg>
)
export default SvgComponent
