import React from 'react';

const NewPass: React.FC = () => {
    return (
        <section className="section__auth auth">
            <div className="auth__container">
                <div className="auth__body">
                    <div className="auth__top">
                        <h2 className="auth__title title">Set a new password</h2>
                    </div>
                    <div className="auth__text">Your new password must be different from your previously used passwords.</div>
                    <form className="auth__form">
                        <label className="auth__label">
                            <span>New password</span>
                            <input type="password" className="auth__input" placeholder={"New password"}/>
                        </label>
                        <label className="auth__label">
                            <span>Confirm password</span>
                            <input type="password" className="auth__input" placeholder={"Confirm password"}/>
                        </label>
                        <button className="auth__button green-button green-button_big">Reset password</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default NewPass;