import React from 'react';

function ClickableText({ link, text }) {
  return (
    <a className='text-white text-lg hover:text-amber-100 underline underline-offset-2 ' href={link} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
}

export default ClickableText;
