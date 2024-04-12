import React from 'react'

const Header = () => {
  return (
    <div className="h-[90px]  bg-transparent flex justify-center items-center">
      <h1 class="jt --debug ">
        <span class="jt__row ">
          <span class="jt__text text-7xl text-red-600 font-bold">MMA</span>
        </span>
        <span class="jt__row jt__row--sibling" aria-hidden="true">
          <span class="jt__text  text-7xl text-red-600 font-bold">MMA</span>
        </span>
        <span class="jt__row jt__row--sibling" aria-hidden="true">
          <span class="jt__text  text-7xl text-red-600 font-bold">MMA</span>
        </span>
        <span class="jt__row jt__row--sibling" aria-hidden="true">
          <span class="jt__text text-7xl text-red-600 font-bold">MMA</span>
        </span>
      </h1>
    </div>
  );
}

export default Header