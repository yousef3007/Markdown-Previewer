marked.setOptions({
    breaks: true
})
function App(){
    const [message, setMessage] = React.useState(`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
    
Heres some code, \`<div></div>\`, between 2 backticks.
    
\`\`\`
// this is multi-line code:
    
function anotherExample(firstLine, lastLine) {
 if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
    }
}
\`\`\`
    
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
    
There's also [links](https://www.freecodecamp.org), and
> Block Quotes!
    
    
- And of course there are lists.
    - Some are bulleted.
     - With different indentation levels.
        - That look like this.
    
    
1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
    
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`);
    function handle(value){
        setMessage(value.target.value);
    }
    return(
        <div>
            <textarea id="editor" onChange={handle}>{message}</textarea>
            <div dangerouslySetInnerHTML={{
                __html: marked(message),
            }}  id="preview"></div>
        </div>
    )
}
const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(<App />);