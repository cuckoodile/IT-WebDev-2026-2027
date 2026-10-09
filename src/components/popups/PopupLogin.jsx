import React from 'react'

export default function PopupLogin({isLoginVisible, setLoginVisible}) {
  return (
    <section className='absolute bg-black/50 h-screen w-screen z-50 flex justify-center items-center'>
      <section>
        <p>Login</p>

        <form>
          <div>
            <label htmlFor="">Username</label>
            <input type="text" name="" id="" />
          </div>

          <div>
            <button>Login</button>
            <button>Cancel</button>
          </div>
        </form>
      </section>
    </section>
  )
}
