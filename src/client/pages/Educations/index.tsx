import React from "react"
import EducationList from "../../components/EducationList"
import Education, { EducationModalities, MonthAndYear } from "../../components/EducationList/Education"

export default function Educations() {
  return (
    <EducationList>
      <Education
        title='Escola Técnica Estadual Adv. José David Gil Rodrigues'
        desc='Ensino Técnico em Desenvolvimento de Sistemas.'
        modality={EducationModalities.PRESENTIAL}
        imgSrc='https://raw.githubusercontent.com/Andrey20Allyson/Andrey20Allyson/main/assets/ETE.png'
        start={new MonthAndYear(0, 2019)}
        finish={new MonthAndYear(11, 2021)}
      />
      <Education
        title='UNINASSAU'
        desc='Ensino Superior em Análise e Desenvolvimento de Sistemas'
        modality={EducationModalities.ONLINE}
        imgSrc='https://camo.githubusercontent.com/8dc6e3b95949971bd858767e2f1211f47e3bce84d40f01dd7ac54289f3b84bd8/68747470733a2f2f7777772e756e696e61737361752e6564752e62722f6c616e6470616765732f6e61737361752f696d672f6c61796f75742f6c6f676f2d736d616c6c2e706e67'
        start={new MonthAndYear(0, 2022)}
      />
    </EducationList>
  )
}