import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  const initialMarkdown = `# Welcome to my React Markdown Previewer

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

`;



  const [markdown, setMarkdown] = useState(initialMarkdown);

  useEffect(() => {
    console.log('Markdown content updated');
  }, [markdown]);



  
  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };




  const getMarkdownText = () => {
    const rawMarkup = marked(markdown, { breaks: true, sanitize: true });
    return { __html: rawMarkup };
  };

  return (
    <div className="App">
      <div className='upper'>
        <div className='toolbar'>
          <h1 className='editor_header'>Editor</h1>
          <p className='enlarge'><i className="enl_ico fa fa-arrows-alt"></i></p>
        </div>
        <textarea id='editor' value={markdown} onChange={handleChange} />
      </div>
      <div className='lower'>
        <div id='preview' dangerouslySetInnerHTML={getMarkdownText()} />
      </div>
    </div>
  );
}

export default App;
