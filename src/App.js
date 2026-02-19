import React, { useState } from 'react';
import { Button, InputField, Badge } from './components';
import './tokens/design-tokens.css';
import './App.css';

/**
 * Astra Design System - 컴포넌트 데모
 */
function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="app">
      <header className="app-header">
        <h1>Astra Design System</h1>
        <p>Figma Variable을 활용한 React 컴포넌트 라이브러리</p>
      </header>

      <main className="app-content">
        {/* Button 컴포넌트 */}
        <section className="component-section">
          <h2>Button 컴포넌트</h2>
          
          <div className="demo-group">
            <h3>Primary Variant</h3>
            <div className="demo-row">
              <Button label="Primary Default" variant="Primary" size="Medium" />
              <Button label="Primary Hover" variant="Primary" size="Medium" state="Hover" />
              <Button label="Primary Disabled" variant="Primary" size="Medium" state="Disabled" />
            </div>
            <div className="demo-row">
              <Button label="Small" variant="Primary" size="Small" />
              <Button 
                label="With Icons" 
                variant="Primary" 
                hasIconStart 
                hasIconEnd
                iconStart={<span>★</span>}
                iconEnd={<span>×</span>}
              />
            </div>
          </div>

          <div className="demo-group">
            <h3>Neutral Variant</h3>
            <div className="demo-row">
              <Button label="Neutral Default" variant="Neutral" size="Medium" />
              <Button label="Neutral Hover" variant="Neutral" size="Medium" state="Hover" />
              <Button label="Neutral Disabled" variant="Neutral" size="Medium" state="Disabled" />
            </div>
          </div>

          <div className="demo-group">
            <h3>Subtle Variant</h3>
            <div className="demo-row">
              <Button label="Subtle Default" variant="Subtle" size="Medium" />
              <Button label="Subtle Hover" variant="Subtle" size="Medium" state="Hover" />
              <Button label="Subtle Disabled" variant="Subtle" size="Medium" state="Disabled" />
            </div>
          </div>
        </section>

        {/* InputField 컴포넌트 */}
        <section className="component-section">
          <h2>InputField 컴포넌트</h2>
          
          <div className="demo-group">
            <h3>기본 Input</h3>
            <InputField
              label="이름"
              value={inputValue}
              placeholder="이름을 입력하세요"
              description="실명을 입력해주세요"
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>

          <div className="demo-group">
            <h3>Label 없는 Input</h3>
            <InputField
              showLabel={false}
              value=""
              placeholder="검색어 입력"
              hasDescription={false}
            />
          </div>

          <div className="demo-group">
            <h3>Description 없는 Input</h3>
            <InputField
              label="이메일"
              value=""
              placeholder="example@email.com"
              hasDescription={false}
            />
          </div>
        </section>

        {/* Badge 컴포넌트 */}
        <section className="component-section">
          <h2>Badge 컴포넌트</h2>
          
          <div className="demo-group">
            <h3>모든 Variant</h3>
            <div className="demo-row">
              <Badge label="Default" variant="Default" />
              <Badge label="Brand" variant="Brand" />
              <Badge label="Secondary" variant="Secondary" />
            </div>
            <div className="demo-row">
              <Badge label="Success" variant="Success" />
              <Badge label="Warning" variant="Warning" />
              <Badge label="Danger" variant="Danger" />
            </div>
          </div>

          <div className="demo-group">
            <h3>Remove 버튼 없음</h3>
            <div className="demo-row">
              <Badge label="Fixed Badge" variant="Brand" isRemovable={false} />
              <Badge label="Status: Active" variant="Success" isRemovable={false} />
            </div>
          </div>

          <div className="demo-group">
            <h3>Remove 이벤트 처리</h3>
            <div className="demo-row">
              <Badge 
                label="Click to remove" 
                variant="Brand" 
                onRemove={() => alert('Badge removed!')} 
              />
            </div>
          </div>
        </section>

        {/* Design Tokens 정보 */}
        <section className="component-section">
          <h2>Design Tokens</h2>
          <div className="demo-group">
            <p>모든 컴포넌트는 Figma에서 추출한 Design Variable을 CSS 변수로 활용합니다:</p>
            <ul className="token-list">
              <li><code>--ads-color-brand-primary</code>: 브랜드 주 색상</li>
              <li><code>--ads-color-brand-secondary</code>: 브랜드 보조 색상</li>
              <li><code>--ads-size-padding-x</code>: 가로 패딩</li>
              <li><code>--ads-size-corner</code>: 모서리 반경</li>
              <li><code>--ads-font-family-text</code>: 폰트 패밀리</li>
            </ul>
            <p>
              전체 토큰 목록: <code>src/tokens/design-tokens.css</code> 및{' '}
              <code>src/tokens/design-tokens.js</code>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
