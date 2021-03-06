import React from 'react';
import FiltersList from '../FiltersList';
import PokeList from '../PokeList';

import './styles.scss';

const HomePage = props => {
	const { pokemonsData, isFetching, handlerInputName, nameValue } = props;
	return (
		<div className="pokeApp">
			<h1>Pokedesk</h1>
			<FiltersList handlerInputName={handlerInputName} nameValue={nameValue} />
			<PokeList
				isFetching={isFetching}
				pokemonsData={pokemonsData}
				nameValue={nameValue}
			/>
		</div>
	);
};

export default HomePage;
