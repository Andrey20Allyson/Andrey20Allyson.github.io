import React, { ReactNode } from 'react';
import { NavigationBar } from '../components/NavitagionBar';
import { NavigationButton } from '../components/NavitagionBar/NavigationButton';
import { ThemeSwitch } from '../components/ThemeSwitch';
import { LayoutProvider, useLayout } from '../contexts/layout';
import useThemedClassName from '../hooks/useThemedClassName';
import { ScreenTypes } from '../responsivity';
import './index.css';

export interface AppNavigationBarProps {

}

export function AppNavigationBar() {
  return (
    <NavigationBar>
      <NavigationButton title='Sobre' href='/' />
      <NavigationButton title='Skills' href='/skills' />
      <NavigationButton title='Experiência' href='/experience' />
      <NavigationButton title='Formação' href='/education' />
      <NavigationButton title='Contatos' href='/contacts' />
    </NavigationBar>
  )
}

export interface LayoutProps {
  children?: ReactNode;
}

export type LayoutMap = {
  [key in ScreenTypes]: (props: LayoutProps) => JSX.Element;
}

export const layouts = {
  [ScreenTypes.NORMAL]: NormalAppLayout,
  [ScreenTypes.POCKET]: PocketAppLayout,
};

export function selectLayout(screenType: ScreenTypes) {
  return layouts[screenType];
}

export function FlexibleLayout(props: LayoutProps) {
  return (
    <LayoutProvider>
      <LayoutSelector {...props} />
    </LayoutProvider>
  )
}

export function LayoutSelector(props: LayoutProps) {
  const layout = useLayout();

  const Layout = selectLayout(layout);

  return <Layout {...props} />
}

export function NormalAppLayout({
  children,
}: LayoutProps) {
  return (
    <div className={useThemedClassName("outer-layout")}>
      <div className={useThemedClassName("theme-switch-container")}>
        <ThemeSwitch />
      </div>
      <div className={useThemedClassName("inner-layout")}>
        <AppNavigationBar />
        <div className={useThemedClassName("content")}>
          {children}
        </div>
      </div>
    </div>
  )
}

export function PocketAppLayout({
  children,
}: LayoutProps) {
  return (
    <div className={useThemedClassName("outer-layout pocket")}>
      <div className={useThemedClassName("content pocket")}>
        <div className={useThemedClassName("theme-switch-container")}>
          <ThemeSwitch />
        </div>
        {children}
      </div>
      <div className={useThemedClassName("nav-container pocket")}>
        <AppNavigationBar />
      </div>
    </div>
  )
}