"use client";

import * as React from "react";
import { Button } from "../ui/button";

export default function CTAForm() {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [isFocuedOrValid, setIsFocusedOrValid] = React.useState<boolean>(false);

  return (
    <form action="">
      <div className="bg-white p-2 rounded-lg">
        <div className="relative flex items-center w-full">
          <label
            htmlFor="email-address"
            className={`absolute left-2 top-2 transition-transform text-midnight text-sm font-medium ${isFocuedOrValid && "-translate-y-4"}`}
          >
            Enter Email
          </label>
          <input
            ref={inputRef}
            id="email-address"
            type="email"
            className="pl-2 border-0 focus:border-0 outline-0 focus:outline-0 ring-0 focus:ring-0 text-midnight grow"
            onFocus={() => setIsFocusedOrValid(true)}
            onBlur={() =>
              inputRef.current?.value
                ? setIsFocusedOrValid(true)
                : setIsFocusedOrValid(false)
            }
          />
          <Button size="lg" className="bg-midnight text-white shrink-0">
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}
