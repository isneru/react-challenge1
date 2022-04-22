import { Challenge1Helper } from './challenge1.helper';

export const Challenge1: React.FC = () => {
	//saca os valores do challenge1helper
	const { title, subtitle, handleHeaderVisibilityOnClick, isHeaderVisible } = Challenge1Helper();

	return (
		<div>
			{/* le os valores passados do challenge1helper */}

			{isHeaderVisible && (
				<>
					<h2>{title}</h2> <h4>{subtitle}</h4>
				</>
			)}

			<button onClick={handleHeaderVisibilityOnClick}>UwU</button>
		</div>
	);
};
