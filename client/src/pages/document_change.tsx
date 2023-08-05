import React, {useState} from 'react';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

interface IUsers {
    name: string,
    inn: number,
    organisation: string
}

const users: Array<IUsers> = [
    {name: "Сашок", inn: 21313123124, organisation: 'ООО "Пушок"'},
    {name: "Сашок", inn: 21313123124, organisation: 'ООО "Пушок"'},
    {name: "Сашок", inn: 21313123124, organisation: 'ООО "Пушок"'}
]

interface Option {
    label: string;
    inn: string;
}

const options: Option[] = [
    { label: 'Организация 1', inn: '1234567890'},
    { label: 'Организация 2', inn: '0987654321'},
];



function Document_change() {

    const [selected, setSelected] = useState<Option>(options[0]);
    const [selected2, setSelected2] = useState<Option>(options[0]);

    const handleExportClick = () => {
        const element = document.getElementById("docu_change_menu");
        if (element) {
            // Сохранение исходных стилей
            const originalStyles: string[] = [];
            const elementsToClean1 = element.querySelectorAll(".otKogo");
            elementsToClean1.forEach((el, index) => {
                if (el instanceof HTMLElement) {
                    originalStyles[index] = el.getAttribute("style") || "";
                    el.style.background = "";
                }
            });

            for (let i = 1; i <= 6; i++) {
                const elementsToClean2 = element.querySelectorAll(`.change${i}`);
                elementsToClean2.forEach((el, index) => {
                    if (el instanceof HTMLElement) {
                        originalStyles[index] = el.getAttribute("style") || "";
                        el.style.background = "";
                    }
                });
            }

            // Экспорт в PDF
            html2canvas(element).then((canvas) => {
                const imgData = canvas.toDataURL("image/png");
                const pdf = new jsPDF("p", "mm", "a4");
                const pageHeight = pdf.internal.pageSize.getHeight();
                let imgHeight = (canvas.height * 210) / canvas.width;
                let heightLeft = imgHeight;
                let position = 0;

                // Оставить пустое место внизу первой страницы
                const firstPageHeight = pageHeight - 20;
                const firstPageImgHeight = (firstPageHeight * imgHeight) / pageHeight;
                pdf.addImage(imgData, "PNG", 0, position, 210, firstPageImgHeight);
                heightLeft -= firstPageHeight;

                while (heightLeft >= 0) {
                    position = heightLeft - imgHeight;
                    pdf.addPage();
                    pdf.addImage(imgData, "PNG", 0, position, 210, imgHeight);
                    heightLeft -= pageHeight;
                }

                pdf.save("myfile.pdf");
            });


            // Восстановление исходных стилей
            elementsToClean1.forEach((el, index) => {
                if (el instanceof HTMLElement) {
                    el.setAttribute("style", originalStyles[index]);
                }
            });

            for (let i = 1; i <= 6; i++) {
                const elementsToClean2 = element.querySelectorAll(`.change${i}`);
                elementsToClean2.forEach((el, index) => {
                    if (el instanceof HTMLElement) {
                        el.setAttribute("style", originalStyles[index]);
                    }
                });
            }
        }
    }


    const [inputValues, setInputValues] = useState(["", "", "", "", "", ""]);

    const handleInputChange = (index: number, value: string) => {
        setInputValues((prevValues) => {
            const newValues = [...prevValues];
            newValues[index] = value;
            return newValues;
        });
    };

    const [company, setCompany] = useState("");


    return (
        <>
            <div id="docu" className="docu_change">
                <div id="docu_change_menu" className="c5 doc-content"><p className="c7 c11"><span
                    className="c17"></span></p><a
                    id="t.75a7ff09512e6a96e942d23540c29b7b53002ce2"></a><a id="t.0"></a>
                    <table className="c18">
                        <tbody>
                        <tr className="c16">
                            <td className="c9"><p className="c12"><span
                                className="c2">Исх.: № ____</span></p>
                                <p
                                    className="c15"><span className="c2">«____»____________2022г.</span></p>
                            </td>
                            <td className="c13"><p className="c6"><span
                                className="c2">Кому: Генеральному директору</span>
                            </p>
                                <p className="c6"><span className="c2">{selected2.label}</span></p>
                                <p className="c6"><span className="c2">Юридический и почтовый адрес:</span>
                                </p>
                                <p className="c6"><span className="c2">____, Калужская область, __________ район,</span>
                                </p>
                                <p className="c6"><span
                                    className="c2">Г. ___________, стр. _____,пом.____</span></p>
                                <p className="c6"><span className="c2">Тел: _____________</span>
                                </p>
                                <p className="c6 c7"><span className="c2"></span></p>
                                <p className="c6"><span
                                    className="c2">От кого: <span className={"otKogo"}
                                                                  style={{
                                                                      fontFamily: "calibri,serif",
                                                                      fontWeight: "normal",
                                                                      fontStyle: "normal",
                                                                      background: company ? "greenyellow" : "yellow"
                                                                  }}>{selected.label || "Название компании"}</span>
                                    {selected.inn}</span>
                                </p>
                                <p className="c6"><span
                                    className="c2">Юридический и почтовый адрес:</span></p>
                                <p className="c6"><span className="c2">индекс___, город ___________ ул. .</span>
                                </p>
                                <p className="c6"><span className="c2">___________, стр. _____,пом.____</span>
                                </p>
                                <p className="c6"><span
                                    className="c2">Тел:_______________</span></p>
                                <p className="c6"><span
                                    className="c2">Электронная почта:__________________</span>
                                </p>
                                <p className="c6 c7"><span className="c2"></span></p></td>
                        </tr>
                        </tbody>
                    </table>
                    <p className="c12 c7"><span className="c2"></span></p>
                    <p className="c10"><span className="c14">ПРЕТЕНЗИЯ</span></p>
                    <p
                        className="c10 c7"><span className="c2"></span></p>
                    <p className="c0 c7"><span className="c1 c8"></span></p>
                    <p className="c0"><span
                        className={`c2 change1`}
                        style={{
                            fontFamily: "calibri,serif",
                            fontWeight: "normal",
                            background: inputValues[0] ? "greenyellow" : "yellow",
                        }}
                    >
            {inputValues[0] || "Ваши изменения"}
          </span>
                    </p>
                    <p className="c0"><span
                        className="c2">В соответствии с условиями договора мы свои обязательства выполнили в полном объеме.</span>
                    </p>
                    <p className="c0 change2"><span
                        className={`c2 change2`}
                        style={{
                            fontFamily: "calibri,serif",
                            fontWeight: "normal",
                            background: inputValues[1] ? "greenyellow" : "yellow",
                        }}
                    >
            {inputValues[1] || "Ваши изменения"}
          </span>
                    </p>
                    <p
                        className="c0"><span
                        className="c2">Претензий относительно качества и своевременности оказанных услуг не поступало.</span>
                    </p>
                    <p
                        className="c0"><span className="c2">Согласно пункту 1 статьи 779 Гражданского кодекса Российской Федерации по договору возмездного оказания услуг исполнитель обязуется по заданию заказчика оказать услуги (совершить определенные действия или осуществить определенную деятельность), а заказчик обязуется оплатить эти услуги.</span>
                    </p>
                    <p className="c0"><span className="c2">Согласно пункту 1 статьи 781 Гражданского кодекса Российской Федерации заказчик обязан оплатить оказанные ему услуги в сроки и в порядке, которые указаны в договоре.</span>
                    </p>
                    <p className="c0"><span className="c2">Согласно ст. 309 Гражданского кодекса Российской Федерации обязательства должны исполняться надлежащим образом в соответствии с их условиями.</span>
                    </p>
                    <p className="c0"><span className="c2">Обязательства признаются исполненными надлежащим образом, если точно соблюдены все условия и требования, предъявляемые к предмету исполнения, субъектам, месту, сроку, способу исполнения.</span>
                    </p>
                    <p className="c0"><span className="c2">Также, в силу ст. 310 Гражданского кодекса Российской Федерации, односторонний отказ от исполнения обязательства не допускается.</span>
                    </p>
                    <p className="c0"><span className="c1"></span><span
                        className={`c2 change3`}
                        style={{
                            fontFamily: "calibri,serif",
                            fontWeight: "normal",
                            background: inputValues[2] ? "greenyellow" : "yellow",
                        }}
                    >
            {inputValues[2] || "Ваши изменения"}
          </span><span
                        className="c1"></span><span
                        className="c2">. По состоянию на сегодняшний день обязательства по оплате услуг не выполнено.</span>
                    </p>
                    <p className="c0 change4">
                        <span className="c1"></span><span
                        className={`c2 change4`}
                        style={{
                            fontFamily: "calibri,serif",
                            fontWeight: "normal",
                            background: inputValues[3] ? "greenyellow" : "yellow",
                        }}
                    >
            {inputValues[3] || "Ваши изменения"}
          </span><span
                        className="c8 c1"></span></p>
                    <p className="c0">
                            <span className="c2"
                                  style={{fontFamily: "calibri,serif", fontWeight: "normal", fontStyle: "normal"}}>В силу ст. 307 Гражданского кодекса Российской Федерации кредитор в праве требовать от должника исполнения его обязанности.</span>
                    </p>
                    <p className="c0"><span className="c2"
                                            style={{
                                                fontFamily: "calibri,serif",
                                                fontWeight: "normal",
                                                fontStyle: "normal"
                                            }}>Таким образом, исходя из существа регулируемых названных статей обязательств отказ заказчика от оплаты оказанных ему исполнителем услуг при условии их надлежащего исполнения не допускается.</span>
                    </p>
                    <p className="c0"><span className="c2"
                                            style={{
                                                fontFamily: "calibri,serif",
                                                fontWeight: "normal",
                                                fontStyle: "normal"
                                            }}>Просим в кротчайшие сроки оплатить сумму задолженности, но не позднее 30 календарных дней с момента отправки в Ваш адрес претензии.</span>
                    </p>
                    <p className="c0">
                        <span style={{fontFamily: "calibri,serif", fontWeight: "normal", fontStyle: "normal"}}>Кроме того, просим Вас подписать акт сверки взаимных расчетов по состоянию на </span><span
                        className="c1"></span><span
                        className={`c2 change5`}
                        style={{
                            fontFamily: "calibri,serif",
                            fontWeight: "normal",
                            background: inputValues[4] ? "greenyellow" : "yellow",
                        }}
                    >
            {inputValues[4] || "Ваши изменения"}
          </span><span
                        className="c1"></span><span
                        className="c2"> и вернуть один экземпляр в адрес <span className={"otKogo"}
                                                                               style={{
                                                                                   fontFamily: "calibri,serif",
                                                                                   fontWeight: "normal",
                                                                                   fontStyle: "normal",
                                                                                   background: company ? "greenyellow" : "yellow"
                                                                               }}>{selected.label || "Название компании"}</span> . В случае невозврата акта сверки в наш адрес, в течение 10 (десяти) календарных дней с момента получения Вами претензии с актами, последний в праве считать, что Вы согласны с вашей задолженностью.</span>
                    </p>
                    <p className="c0"><span className="c2">При возникновении разногласий, для выверки расчетов обращаться по телефонам (___) _-___-__, в бухгалтерию <span
                        className={"otKogo"}
                        style={{
                            fontFamily: "calibri,serif",
                            fontWeight: "normal",
                            fontStyle: "normal",
                            background: company ? "greenyellow" : "yellow"
                        }}>{selected.label || "Название компании"}</span> .</span>
                    </p>
                    <p className="c0"><span
                        style={{fontFamily: "calibri,serif", fontWeight: "normal", fontStyle: "normal"}}>Если вышеуказанные требования Вами не будут выполнены, <span
                        className="otKogo" style={{
                        fontFamily: "calibri,serif",
                        fontWeight: "normal",
                        fontStyle: "normal"
                    }}>{selected.label || "Название компании"}</span> оставляет за собой право, руководствуясь договором и нормами действующего Российского законодательства, перерасчитать образовавшуюся задолженность в сторону увеличения с учетом штрафных санкций и пеней, а так же расходов на представителя и передать материалы на рассмотрение в </span><span
                        className={"otKogo"}
                        style={{
                            fontFamily: "calibri,serif",
                            fontWeight: "normal",
                            fontStyle: "normal",
                            background: company ? "greenyellow" : "yellow"
                        }}>{selected.label || "Название компании"}</span><span
                        className="c2"> в порядке установленном действующим законодательством.</span>
                    </p>
                    <div style={{pageBreakBefore: "always"}}></div>
                    <p className="c0"><span className="c2">Ответ просим предоставить в письменном виде в срок не позднее 30 календарных дней с момента отправки претензии в адрес Покупателя. Ответ можно отправить на наш электронный адрес _____@________, с последующим отправлением по почте.</span>
                    </p>
                    <p className="c0 c7"><span className="c2"></span></p>
                    <p className="c0"><span className="c2">Приложение:</span></p>
                    <p
                        className="c0 c7"><span className="c2"></span></p>
                    <p style={{pageBreakInside: "avoid"}} className="c4"><span className="c2">Оригиналы актов сверки взаимных расчетов по состоянию на ______.2016г. – 2 экземпляра на 1 листе каждый.</span>
                    </p>
                </div>
            </div>

            <div className="right_part_input">
                <label htmlFor="company">Название компании (от кого)</label><br/>
                <select value={selected.label} onChange={e => {
                    setSelected(options.find(o => o.label === e.target.value)!)
                }}>
                    {options.map(option => (
                        <option key={option.inn} value={option.label}>
                            {option.label}
                        </option>
                        ))}
                </select>
                <h2>{selected.label}</h2>
                <p>{selected.inn}</p>
                <p>Выбран ИНН: {selected.inn}</p>
                <br/>
                <label htmlFor="company">Название компании (Кому)</label><br/>
                <select value={selected2.label} onChange={e => {
                    setSelected2(options.find(o => o.label === e.target.value)!)
                }}>
                    {options.map(option => (
                        <option key={option.inn} value={option.label}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <h2>{selected2.label}</h2>
                <p>{selected2.inn}</p>
                {inputValues.map((value, index) => (
                    <div>
                        <label htmlFor="change1_input">{`Изменения ${index + 1}`}</label>
                        <input
                            key={index}
                            type="text"
                            id={`change${index + 1}_input`}
                            value={value}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                        />
                    </div>
                ))}
                <div className="button_confirm">
                    <input onClick={handleExportClick} type="button"
                           value={"Распечатать в виде PDF"}
                           className="button"
                           id="print_but"/>
                    <input type="button" value={"Сохранить шаблон"}
                           id="save" className="button"/>
                    <div className="saved_notify">
                        <p>saved</p>
                    </div>
                </div>

            </div>

        </>


    );
}

export default Document_change
