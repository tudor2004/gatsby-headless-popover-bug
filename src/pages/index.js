import React from "react"

import { Popover } from "@headlessui/react"

export default function Home() {
  return (
    <div>
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button as="a">
              <span>Solutions</span>
            </Popover.Button>

            <Popover.Panel tabIndex={-1}>
              <div>
                <button type="button">First button</button>
                <button type="button">Second button</button>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </div>
  )
}
