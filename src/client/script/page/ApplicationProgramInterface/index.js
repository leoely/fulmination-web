import React from 'react';
import Page from '~/client/script/component/Page';
import Text from '~/client/script/component/Text';
import Formats from '~/client/script/component/Formats';
import Format from '~/client/script/component/Format';
import style from './index.module.css';

class ApplicationProgramInterface extends Page {
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
