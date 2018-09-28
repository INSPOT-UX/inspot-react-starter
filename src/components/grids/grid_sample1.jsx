import React from 'react';

export class GridSample1 extends React.Component {
    render(){
        return(
            <div className="container system-wrap gridsample1">
                <div className="row"></div>
                <div className="col-md-8">
                    <h1>em 단위를 이용한 Baseline 그리드 예시 </h1>
                    <h2>Setting up a typographic baseline grid</h2>

                    <p>
                    <strong>Vertical rhythm explained by Harry Roberts | 
                    <a href="https://csswizardry.com">csswizardry.com</a>
                    </strong><br />

                    To maintain vertical rhythm we need two key ingredients; consistent line heights and consistent bottom margins. 
                    We need a magic number. This number is typically defined by the line height of your body copy, so if you have html
                    {`{ font-size:16px; line-height:1.5; }`} then your magic number is 16 x 1.5 = 24.
                    </p>                                  
                        
                    <p>간혹 아이템 한두 개만 레이아웃에 직접 배치하고 나머지는 콘텐츠 순서에 따라 자동으로 배치하고 싶을 때가 있다. 
                        이 사례는 소스 코드에 나온 순서와 시각적인 표현에 괴리가 있는지 확인해보기에 좋다. 콘텐츠의 위치가 자동 배치(auto-placement) 
                        방식에 따라 설정된다면 아마 잘 정돈되었다 볼 수 있을 것이다.

                        하지만 나는 아이템을 배치해야 할 때는 아예 모든 아이템에 일일이 위치를 설정하곤 한다. 이렇게 하면 누군가 해당 문서에 다른 내용을 추가하고 
                        그리드 자동 배치를 통해 추가된 내용을 잘못된 곳에 두어 그게 레이아웃을 망칠 상황이 되어도 이상한 문제가 생기지 않는다. 
                        직접 전부 배치를 한 뒤에 아이템을 추가하면 그리드는 추가된 아이템을 배치된 아이템 이후에 비어 있는 그리드 셀에 둔다. 
                        결과가 원했던 것과 다를 수는 있다. 하지만 새로 추가한 아이템이 작성한 레이아웃 끝에 자리 잡는 편이 중간 어디에서 
                        툭 튀어나와서 주변의 다른 아이템을 밀어내는 것보다는 더 나을 것이다.
                    </p>
                    <div className="row">
                    <figure className="col-12">
                        <img src="https://25.media.tumblr.com/c2830f6e8b8bab6a3b832e724f347596/tumblr_moylwghLyo1sx0nuwo2_r1_500.png" />
                    </figure>
                    </div>
                    

                    <section>
                        <h1>Headline 헤드라인 타이틀</h1>
                        <h2>Headline 헤드라인 타이틀</h2>
                        <h3>Headline 헤드라인 타이틀</h3>
                        <h4>Headline 헤드라인 타이틀</h4>
                        <h5>Headline 헤드라인 타이틀</h5>
                        <h6>Headline 헤드라인 타이틀</h6>
                    </section>

                    <section>
                        <table className="table">
                        <tbody>
                        <tr>
                        <td className="date">Boston, 1999</td>
                        <td>J. R. R. Tolkien: The Fellowship of the Ring</td>
                        </tr>
                        <tr>
                        <td className="date">Boston, 1999</td>
                        <td>J. R. R. Tolkien: The Two Towers</td>
                        </tr>
                        <tr>
                        <td className="date">Boston, 1999</td>
                        <td>J. R. R. Tolkien: The Return of the King</td>
                        </tr>
                        </tbody>
                        </table>
                    </section>
                </div>
            </div>            
        )
    }
}

export default GridSample1;
