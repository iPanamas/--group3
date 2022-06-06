import Fox from './Vladimir';
import foxData from '../data/fox.json';

import Anna from './Anna';
import anime from '../data/anime.json';

import Car from './Ihor';
import car from '../data/car.json';

import Plane from './Denys';
import plane from '../data/plane.json';

import Sunrises from './Iryna';
import sunrises from '../data/sunrises.json';

import Lenka from './Lenka';
import dinosaur from '../data/dinosaur';

import Natalia from './Natalia';
import flowers from '../data/flower.json';

export const App = () => {
  return (
    <div>
      <Fox stats={foxData} />
      <Anna anime={anime} />
      <Car images={car} />
      <Lenka dinosaur={dinosaur} />
      <Natalia flowers={flowers} />
      <Sunrises sunrises={sunrises} />
      <Plane plane={plane} />
    </div>
  );
};

export default App;
