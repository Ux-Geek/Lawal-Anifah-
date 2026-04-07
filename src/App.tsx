/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from "./sections/Hero";
import { Identity } from "./sections/Identity";
import { Imaginary } from "./sections/Imaginary";
import { Transition } from "./sections/Transition";
import { Bridge } from "./sections/Bridge";
import { Footer } from "./sections/Footer";

export default function App() {
  return (
    <main className="selection:bg-brand-gold selection:text-brand-green">
      <Hero />
      <Identity />
      <Imaginary />
      <Transition />
      <Bridge />
      <Footer />
    </main>
  );
}

