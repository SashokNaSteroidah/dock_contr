import React from 'react';

function Create_choose() {

    return (
        <section className="creat_new_docu_page">
            <div>
                <h1>Продолжить создание документа</h1>
                <h1>Создать новый</h1>
            </div>
            <div>
                <aside>
                    <article className="saved_docu">
                        <p className="non_create_notify">Вы не создали еще ни одного документа</p>
                        <img className="saved_img_docu" src="/img/saved_document.png" alt=""/>
                        <p className="saved_time"></p>
                    </article>
                </aside>
                <aside>
                    <article className="saved_docu">
                        <img className="templates_img_docu" src="/img/saved_document.png" alt=""/>
                        <p className="templates_author"></p>
                    </article>
                    <article className="saved_docu">
                        <img className="templates_img_docu" src="/img/saved_document.png" alt=""/>
                        <p className="templates_author"></p>
                    </article>
                    <article className="saved_docu">
                        <img className="templates_img_docu" src="/img/saved_document.png" alt=""/>
                        <p className="templates_author"></p>
                    </article>
                    <article className="saved_docu">
                        <img className="templates_img_docu" src="/img/saved_document.png" alt=""/>
                        <p className="templates_author"></p>
                    </article>
                </aside>
            </div>
        </section>
    );
}

export default Create_choose
