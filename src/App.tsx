import React from 'react';
import Button, { ButtonSize, ButtonType } from './Components/Button/button';
function App() {
  return (
    <div className='App'>
      <Button disabled>hello</Button>
      <Button
        onClick={() => console.log('clicked')}
        btnType={ButtonType.Primary}
        size={ButtonSize.Large}
      >
        hello
      </Button>
      <Button
        btnType={ButtonType.Link}
        size={ButtonSize.Small}
        href='www.baidu.com'
      >
        BaiduLink
      </Button>
      <Button btnType={ButtonType.Link} disabled>
        disabled Link
      </Button>
    </div>
  );
}

export default App;
