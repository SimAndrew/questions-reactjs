const questions = [
	{
		id: 1,
		title: 'What is the purpose of the alt attribute in an <img> tag?',
		info: 'The alt attribute provides alternative text for images, used by screen readers and displayed if the image fails to load. It improves accessibility and helps with SEO.',
	},
	{
		id: 2,
		title: 'What is the difference between <div> and <span> elements?',
		info: '<div> is a block-level element used for grouping content, while <span> is an inline element used to style or group phrasing content.',
	},
	{
		id: 3,
		title: 'How do you center a div horizontally in CSS?',
		info: 'Use margin: 0 auto; on the div while setting a specific width. Alternatively, use Flexbox (display: flex; justify-content: center;) on the parent container.',
	},
	{
		id: 4,
		title: 'What is the difference between padding and margin in CSS?',
		info: "Padding is the space between an element's content and its border, while margin is the space outside the border separating the element from other elements.",
	},
	{
		id: 5,
		title: "What are JavaScript's primitive data types?",
		info: 'JavaScript has 7 primitives: string, number, boolean, null, undefined, symbol (ES6), and bigint (ES2020). All other values are objects.',
	},
	{
		id: 6,
		title: 'What is the difference between == and === in JavaScript?',
		info: '== performs type coercion before comparison, while === (strict equality) checks both value and type without coercion.',
	},
	{
		id: 7,
		title: 'What is a React component?',
		info: 'A React component is a reusable piece of UI that can be either a function or class that returns JSX. Components can manage their own state and receive props.',
	},
	{
		id: 8,
		title: 'What is the purpose of useState in React?',
		info: 'useState is a React Hook that lets you add state to functional components. It returns a stateful value and a function to update it: const [state, setState] = useState(initialValue);',
	},
];

export default questions;
