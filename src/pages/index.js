import React from "react"

import { Popover } from "@headlessui/react"

const Button = props => {
  return <button type="button">{props.children}</button>
}

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
                <Button>First Button</Button>
                <Button>Second Button</Button>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </div>
  )
}
