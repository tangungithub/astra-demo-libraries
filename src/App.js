import React, { useState } from 'react';
import { Button, InputField, SelectField, Badge, SidebarNavigation, Bubbles, PromptInput, FloatingAction, Avatar } from './components';
import './tokens/design-tokens.css';
import './App.css';

/**
 * Astra Design System - 컴포넌트 데모
 */
function App() {
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [selectedNav, setSelectedNav] = useState('film');
  const [promptValue, setPromptValue] = useState('');

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
          <SidebarNavigation />

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

        {/* SelectField 컴포넌트 */}
        <section className="component-section">
          <h2>SelectField 컴포넌트</h2>
          
          <div className="demo-group">
            <h3>기본 Select</h3>
            <SelectField
              label="국가 선택"
              value={selectValue}
              placeholder="국가를 선택하세요"
              description="거주 중인 국가를 선택해주세요"
              options={[
                { label: '대한민국', value: 'kr' },
                { label: '미국', value: 'us' },
                { label: '일본', value: 'jp' },
                { label: '중국', value: 'cn' },
              ]}
              onChange={(e) => setSelectValue(e.target.value)}
            />
          </div>

          <div className="demo-group">
            <h3>Label 없는 Select</h3>
            <SelectField
              showLabel={false}
              value=""
              placeholder="옵션 선택"
              hasDescription={false}
              options={['옵션 1', '옵션 2', '옵션 3']}
            />
          </div>

          <div className="demo-group">
            <h3>Description 없는 Select</h3>
            <SelectField
              label="카테고리"
              value=""
              placeholder="카테고리 선택"
              hasDescription={false}
              options={['개발', '디자인', '마케팅', 'PM']}
            />
          </div>
        </section>

        {/* 
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
        {/* SidebarNavigation 컴포넌트 */}
        <section className="component-section">
          <h2>SidebarNavigation 컴포넌트</h2>
          
          <div className="demo-group">
            <h3>세로형 네비게이션</h3>
            <div className="demo-row" style={{ height: '900px', gap: '24px' }}>
              <SidebarNavigation 
                selectedItem={selectedNav}
                onNavigate={(itemId) => {
                  setSelectedNav(itemId);
                  console.log('Navigate to:', itemId);
                }}
                userName="Admin"
              />
              <SidebarNavigation 
                selectedItem="home"
                userName="Guest"
              />
              <SidebarNavigation 
                selectedItem="folder"
                userName="Dev"
                userAvatar="https://i.pravatar.cc/32"
              />
            </div>
          </div>

          <div className="demo-group">
            <h3>인터랙티브 예시</h3>
            <p>현재 선택된 메뉴: <strong>{selectedNav}</strong></p>
            <p>좌측 사이드바의 아이콘을 클릭해보세요!</p>
          </div>
        </section>

        {/* Bubbles 컴포넌트 */}
        <section className="component-section">
          <h2>Bubbles 컴포넌트</h2>
          
          <div className="demo-group">
            <h3>AI 채팅 버블</h3>
            <div className="demo-row" style={{ flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
              <Bubbles type="ai" />
              <Bubbles type="ai" message="여기 당신이 요청한 정보가 있어요." />
              <Bubbles type="ai" message="어떻게 도와드릴까요?" />
            </div>
          </div>

          <div className="demo-group">
            <h3>User 채팅 버블</h3>
            <div className="demo-row" style={{ flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
              <Bubbles type="user" />
              <Bubbles type="user" message="이 기능을 어떻게 사용하나요?" />
              <Bubbles type="user" message="버튼을 만들어줄 수 있나요?" />
            </div>
          </div>

          <div className="demo-group">
            <h3>대화형 예시</h3>
            <div className="demo-row" style={{ flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
              <Bubbles type="ai" message="안녕하세요! 무엇을 도와드릴까요?" />
              <Bubbles type="user" message="React 컴포넌트를 만들고 싶어요." />
              <Bubbles type="ai" message="좋아요! 어떤 컴포넌트를 만들고 싶으신가요?" />
              <Bubbles type="user" message="시작하기 버튼이 필요해요." />
            </div>
          </div>
        </section>

        {/* PromptInput 컴포넌트 */}
        <section className="component-section">
          <h2>PromptInput 컴포넌트</h2>
          
          <div className="demo-group">
            <h3>기본 프롬프트 입력</h3>
            <div className="demo-row" style={{ flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
              <PromptInput
                value={promptValue}
                onChange={(value) => setPromptValue(value)}
                onSend={(value) => {
                  console.log('Send:', value);
                  alert(`메시지 전송: ${value}`);
                }}
                onAttach={() => {
                  console.log('Attach file');
                  alert('파일 첨부 기능');
                }}
              />
            </div>
          </div>

          <div className="demo-group">
            <h3>커스텀 플레이스홀더</h3>
            <div className="demo-row" style={{ flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
              <PromptInput
                placeholder="메시지를 입력하세요..."
              />
              <PromptInput
                placeholder="질문을 작성해주세요"
              />
            </div>
          </div>

          <div className="demo-group">
            <h3>인터랙티브 예시</h3>
            <p>현재 입력된 텍스트: <strong>{promptValue || '(비어있음)'}</strong></p>
            <p>전송 버튼(우측)과 첨부 버튼(좌측)을 클릭해보세요!</p>
          </div>
        </section>

        {/* FloatingAction 컴포넌트 */}
        <section className="component-section">
          <h2>FloatingAction 컴포넌트</h2>
          
          <div className="demo-group">
            <h3>기본 플로팅 액션 버튼</h3>
            <div className="demo-row">
              <FloatingAction onClick={() => alert('전송!')} />
              <FloatingAction onClick={() => console.log('Send')} size={20} />
              <FloatingAction onClick={() => console.log('Send')} size={18} />
            </div>
          </div>

          <div className="demo-group">
            <h3>비활성화 상태</h3>
            <div className="demo-row">
              <FloatingAction disabled />
              <FloatingAction disabled size={20} />
            </div>
          </div>

          <div className="demo-group">
            <h3>인터랙티브 예시</h3>
            <div className="demo-row">
              <FloatingAction 
                onClick={() => {
                  console.log('Message sent!');
                  alert('메시지가 전송되었습니다!');
                }} 
              />
            </div>
            <p>버튼을 클릭하면 메시지가 전송됩니다.</p>
          </div>
        </section>

        {/* Avatar 컴포넌트 */}
        <section className="component-section">
          <h2>Avatar 컴포넌트</h2>
          
          <div className="demo-group">
            <h3>Image Type - Circle</h3>
            <div className="demo-row">
              <Avatar type="Image" shape="Circle" size="Large" />
              <Avatar type="Image" shape="Circle" size="Medium" />
              <Avatar type="Image" shape="Circle" size="Small" />
            </div>
          </div>

          <div className="demo-group">
            <h3>Image Type - Square</h3>
            <div className="demo-row">
              <Avatar type="Image" shape="Square" size="Large" />
              <Avatar type="Image" shape="Square" size="Medium" />
              <Avatar type="Image" shape="Square" size="Small" />
            </div>
          </div>

          <div className="demo-group">
            <h3>Initial Type - Circle</h3>
            <div className="demo-row">
              <Avatar type="Initial" shape="Circle" size="Large" initials="F" />
              <Avatar type="Initial" shape="Circle" size="Medium" initials="A" />
              <Avatar type="Initial" shape="Circle" size="Small" initials="B" />
            </div>
          </div>

          <div className="demo-group">
            <h3>Initial Type - Square</h3>
            <div className="demo-row">
              <Avatar type="Initial" shape="Square" size="Large" initials="F" />
              <Avatar type="Initial" shape="Square" size="Medium" initials="C" />
              <Avatar type="Initial" shape="Square" size="Small" initials="D" />
            </div>
          </div>

          <div className="demo-group">
            <h3>커스텀 이미지</h3>
            <div className="demo-row">
              <Avatar type="Image" shape="Circle" size="Large" imageSrc="https://i.pravatar.cc/40" />
              <Avatar type="Image" shape="Circle" size="Medium" imageSrc="https://i.pravatar.cc/32" />
              <Avatar type="Image" shape="Square" size="Large" imageSrc="https://i.pravatar.cc/40?img=12" />
            </div>
          </div>

          <div className="demo-group">
            <h3>다양한 이니셜</h3>
            <div className="demo-row">
              <Avatar type="Initial" shape="Circle" initials="J" />
              <Avatar type="Initial" shape="Circle" initials="K" />
              <Avatar type="Initial" shape="Circle" initials="L" />
              <Avatar type="Initial" shape="Square" initials="M" />
              <Avatar type="Initial" shape="Square" initials="N" />
            </div>
            <p>주의: 이니셜은 단일 문자(A, B, C)만 사용해야 합니다.</p>
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
