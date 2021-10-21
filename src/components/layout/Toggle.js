import { useState } from 'react';
import { Switch } from '@headlessui/react';

export default function CustomLabelExample() {
  const [enabled, setEnabled] = useState(false);

  const gd = (
    <defs>
      <linearGradient id="iconGrad" x2="0%" y2="100%">
        <stop offset="0%" stop-color="rgba(255, 233, 155, 1)" />
        <stop offset="40%" stop-color="rgba(255, 171, 124, 1)" />
        <stop offset="100%" stop-color="rgba(255, 86, 80, 1)" />
      </linearGradient>
    </defs>
  );

  return (
    <Switch.Group>
      <Switch checked={enabled} onChange={setEnabled}>
        <div className=" flex items-center justify-center bg-white rounded-full h-9 w-9 shadow-input ml-3 border border-red-300 invisible lg:visible">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 icon-grad"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {gd}
              <path
                d={`${
                  enabled
                    ? 'M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z'
                    : 'M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
                }`}
              />
            </svg>
          </div>
        </div>
      </Switch>
    </Switch.Group>
  );
}
