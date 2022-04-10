import React, { useState } from 'react';
import { DialogueBox } from '../components/DialogueBox/DialogueBox';
import { Button } from '../components/Button/Button';

const Field = () => {
  const [dialogueIsOpen, setDialogueIsOpen] = useState(false);

  /*
     To use the cma, inject it as follows.
     If it is not needed, you can remove the next line.
  */
  // const cma = useCMA();
  // If you only want to extend Contentful's default editing experience
  // reuse Contentful's editor components
  // -> https://www.contentful.com/developers/docs/extensibility/field-editors/

  if (dialogueIsOpen) {
    return (
      <DialogueBox />
    )
  } else {
    return <Button handleClick={() => setDialogueIsOpen(true)} buttonText='Choose PixaBay Image'></Button>;
  }
};

export default Field;
