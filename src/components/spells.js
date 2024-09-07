import React, { useState } from 'react';
import '../styles/spells.css';

function Spells() {
    const [spellName, setSpellName] = useState(''); // Estado para armazenar o nome da magia

    const handleNameChange = (event) => {
        setSpellName(event.target.value); // Atualiza o nome da magia quando o usuário digita
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode adicionar a lógica de filtragem das magias pelo nome
        console.log("Nome da magia filtrado:", spellName);
    };

    // Simulação de dados de magias (você vai substituir por dados reais)
    const spells = [
        { id: 1, name: 'Fireball', description: 'Lança uma bola de fogo.' },
        { id: 2, name: 'Magic Missile', description: 'Dispara mísseis mágicos.' },
        { id: 3, name: 'Fireball', description: 'Lança uma bola de fogo.' },
        { id: 4, name: 'Magic Missile', description: 'Dispara mísseis mágicos.' },
        { id: 5, name: 'Fireball', description: 'Lança uma bola de fogo.' },
        { id: 6, name: 'Magic Missile', description: 'Dispara mísseis mágicos.' },
        // Outros exemplos de magias
    ];

    return (
        <div className="spell-container">
            <div className="filter-section">
                <form onSubmit={handleSubmit} className="spell-filter-form">
                    <div className="filter-group">
                        <label htmlFor="spellName">Nome da Magia:</label>
                        <input 
                            type="text" 
                            id="spellName" 
                            value={spellName} 
                            onChange={handleNameChange} 
                            placeholder="Digite o nome da magia" 
                        />
                    </div>
                    <button type="submit">Filtrar</button>
                </form>
            </div>

            <div className="spell-list">
                {spells.map(spell => (
                    <div key={spell.id} className="spell-card">
                        <h2>{spell.name}</h2>
                        <p>{spell.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Spells;
