import * as React from 'react';
import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import '../../styles/components/landingPage/Accordion.style.css';

export default function AccordionExpandIcon() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='accordion'>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ padding: '0 2rem' }}
        >
          <Typography sx={{ fontFamily: 'Plus Jakarta Sans SemiBold', fontSize: '1.3rem', margin: '1rem 0' }}>
            Valorisez vos réalisations
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>Mettez en avant vos projets académiques, personnels ou freelance.</li>
              <li>Dépassez le CV classique et montrez vos compétences concrètes.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
        sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{ padding: '0 2rem' }}
        >
          <Typography sx={{ fontFamily: 'Plus Jakarta Sans SemiBold', fontSize: '1.3rem', margin: '1rem 0' }}>
            Transformez vos efforts en opportunités concrètes
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>Accédez à des opportunités professionnelles grâce à vos réalisations.</li>
              <li>Montrez votre valeur ajoutée aux employeurs potentiels.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
        sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{ padding: '0 2rem' }}
        >
          <Typography sx={{ fontFamily: 'Plus Jakarta Sans SemiBold', fontSize: '1.3rem', margin: '1rem 0' }}>
            Simplifiez vos recherches grâce à des outils intelligents
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>Utilisez des outils de recherche avancés pour trouver des opportunités.</li>
              <li>Gagnez du temps avec des filtres et des suggestions personnalisées.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
        sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
      >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
          sx={{ padding: '0 2rem' }}
        >
          <Typography sx={{ fontFamily: 'Plus Jakarta Sans SemiBold', fontSize: '1.3rem', margin: '1rem 0' }}>
            Boostez votre confiance avec un profil unique
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>Mettez en avant vos projets académiques, personnels ou freelance.</li>
              <li>Dépassez le CV classique et montrez vos compétences concrètes.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}