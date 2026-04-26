/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Imaginary } from "./sections/Imaginary";
import { Transition } from "./sections/Transition";
import { Bridge } from "./sections/Bridge";
import { Stack } from "./sections/Stack";
import { Positioning } from "./sections/Positioning";
import { Footer } from "./sections/Footer";

export default function App() {
  return (
    <main className="selection:bg-brand-gold selection:text-brand-green">
      <Imaginary />
      <Transition />
      <Bridge />
      <Stack />
      <Positioning />
      <Footer />
    </main>
  );
}

