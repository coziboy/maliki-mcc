import React from 'react';
import { Activities } from './Activities';
import { Masterpieces } from './Masterpieces';
import { Admission } from './Admission';

export const MainContent = () => {
  return (
    <div>
      <section id="kegiatan">
        <Activities></Activities>
      </section>
      <section id="mahakarya">
        <Masterpieces></Masterpieces>
      </section>
      <section id="daftar">
        <Admission></Admission>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};