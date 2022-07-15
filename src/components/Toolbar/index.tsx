import Box from '../Box';
import Button from '../Button';
import CaretDown from '../icons/CaretDown';
import Bold from '../icons/Bold';
import Italic from '../icons/Italic';
import Underline from '../icons/Underline';
import Strike from '../icons/Strike';
import Link from '../icons/Link';
import CharacterColor from '../icons/CharacterColor';



const Toolbar: React.FunctionComponent = () => {
  
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 'var(--ls-z-index-level-2)',
        transition: 'opacity 100ms ease-in-out',
        backgroundColor: 'var(--text-style-toolbar-background)',
        borderRadius: 'radius.4',
        display: 'flex',
        gap: 'space-3',
        alignItems: 'center',
        width: 'auto',
        height: 40,
        padding: 'space-3',
        boxShadow: '0 1px 3px gray.20'
      }}
    >
      <Button variant="hollow">
        <span>Paragraph</span>
        <CaretDown />
      </Button> 
      <Box sx={{
        width: 'space.1',
        height: 'space.8',
        background: 'var(--text-style-divider-background)',
        margin: '0 space.2'
      }}></Box>
      <Button variant="hollow">
        <Bold />
      </Button> 
      <Button variant="hollow">
        <Italic />
      </Button> 
      <Button variant="hollow">
        <Underline />
      </Button> 
      <Button variant="hollow">
        <Strike />
      </Button> 
      <Button variant="hollow">
        <Link />
      </Button> 
      <Box sx={{
        width: 'space.1',
        height: 'space.8',
        background: 'var(--text-style-divider-background)',
        margin: '0 space.2'
      }}></Box>
      <Button variant="hollow">
        <CharacterColor />
        <CaretDown />
      </Button>
    </Box>
  )
};

export default Toolbar;
