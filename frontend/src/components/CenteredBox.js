import React from 'react';

const CenteredBox = ({ leftPanel, rightPanel }) => {
  return (
    <section className="centered-box">
      <div className="columns">
        <article className="column">{leftPanel}</article>
        <article className="column is-1" />
        <article className="column">{rightPanel}</article>
      </div>
    </section>
  );
};

export default CenteredBox;
