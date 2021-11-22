import React from 'react';
import HeaderPresenter from './HeaderPresenter';

function HeaderContainer() {
  const getCurrentMonth = new Date().getMonth() + 1;
  return <HeaderPresenter NowMonth={getCurrentMonth} />;
}

export default HeaderContainer;
