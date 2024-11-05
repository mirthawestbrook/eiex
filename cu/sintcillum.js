   import { SketchPicker } from 'react-color';

   function MyColorPicker() {
       return <SketchPicker color={color} onChange={(color) => setColor(color)} />;
   }
   