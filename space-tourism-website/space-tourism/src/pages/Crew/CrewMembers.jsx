import { useState } from 'react';
import SelectCrewMember from '../../utils/SelectCrewMember';
import { useCrew } from '../../hooks/useData';

const CrewMembers = () => {
    const [selectedCrewMember, setSelectedCrewMember] = useState('commander');
    const { crew, loading, error } = useCrew(selectedCrewMember);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>
  return (
    <div className='crew-content'>
        <div className='crew-content-info'>
            <div className='crew-info'>
                <h2>{crew.role}</h2>
                <h1>{crew.name}</h1>
                <p>{crew.bio}</p>
            </div>
            <SelectCrewMember 
                selectedCrewMember={selectedCrewMember}
                onChangeCrewMember={setSelectedCrewMember}
            />
        </div>
        <div className="crew-image-container">
            <img className='crew-image' src={crew.images.png} alt={crew.name} />
        </div>
    </div>
  )
}

export default CrewMembers;