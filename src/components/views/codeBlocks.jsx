import { dracula, CopyBlock, CodeBlock } from 'react-code-blocks';

function CustomCodeBlock({title = '', code = '', language = '', showLineNumbers = false }) {
  return (
    <div className="my-2 mx-2">
      <h6>{title}</h6>
      <CodeBlock
        text={code}
        language={language}
        showLineNumbers={showLineNumbers}
        theme={dracula}
        wrapLines={true}
      />
    </div>
  );
}

function CustomCopyBlock(props) {
  return (
    <div className="my-5">
       <h6>{props.title}</h6>
      <CopyBlock
        text={props.code}
        language={props.language}
        showLineNumbers={props.showLineNumbers}
        theme={dracula}
        wrapLines={true}
      />
    </div>
  );
}

export {CustomCodeBlock, CustomCopyBlock};