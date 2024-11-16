import * as React from "react";

const Search = React.forwardRef<HTMLInputElement>((props, ref) => {
  return <input ref={ref} type="search" />;
});

Search.displayName = "Search";

export default function App() {
  const input = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    if (input.current) {
      input.current.focus();
    }
  }, []);
  return <Search ref={input} />;
}
