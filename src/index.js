import {render} from 'preact';
import {useCallback, useState} from 'preact/hooks';

const App = () => {
	const [tags, setTags] = useState(['foo', 'bar', 'baz']);
	const [text, setText] = useState('');
	const handleKeyDown = useCallback((event) => {
		const value = event.target.value;
		switch (event.keyCode) {
			case 8:
				if (!value && tags.length) {
					event.preventDefault();
					const newTags = [...tags];
					newTags.pop();
					setTags(newTags);
				}
				break;
			case 32:
				if (value) {
					event.preventDefault();
					setTags([...tags, value]);
					setText('');
				}
		}
	}, [tags]);
	const handleChange = useCallback((event) => {
		setText(event.target.value);
	}, []);
	return (
		<div style={{display: 'flex', gap: '8px'}}>
			{tags.map(tag => <span key={tag} style={{background: '#eee'}}>{tag}</span>)}
			<input value={text} onKeyDown={handleKeyDown} onChange={handleChange} />
		</div>
	);
}

render(<App/>, document.getElementById('root'));
