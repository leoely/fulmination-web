import React from 'react';
import style from './index.module.css';
import Text from '~/client/script/component/Text';
import Formats from '~/client/script/component/Formats';
import Format from '~/client/script/component/Format';

class ApplicationProgramInterface extends React.Component {
  render() {
    return (
      <div className={style.applicationProgramInterface}>
        <Text>
        Fulmination provider api "Fulmination".User can this api parse ctf text.
        </Text>
        <Formats>
          <Format format="javascript">import Fulmination from 'fulmination';</Format>
          <Format format="javascript">const fulmination = new Fulmination();</Format>
          <Format format="javascript">fulmination.scan(text);</Format>
        </Formats>
        <Text>
          In this way user can parse their own ctf text.Output text be colored to
          terminal.
        </Text>
      </div>
    );
  }
}

export default ApplicationProgramInterface;
