// 3. render Snips using state
import React from 'react';
import Snip from '../snippet';
import './SnippetList.css';

export default function SnipList({ snippets }) {
  console.log('Snip List rendered');
  // fetch snippets and then render
  return (
    <section id="snippets">
      {snippets.map(snippet => (
        <Snip key={snippet.id} snippet={snippet} />
      ))}
    </section>
  );
}
