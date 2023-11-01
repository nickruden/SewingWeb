import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IHome } from './Home.interface'

import { IoIosArrowDown } from 'react-icons/io'
import { LuSettings2 } from 'react-icons/lu'

import VacanciesCard from '@/components/elements/Vacancy/VacanciesCard/VacanciesCard'
import SiteLayout from '@/components/layouts/Site/SiteLayout'

import styles from './Home.module.scss'

import ad from 'public/ad/ad.png'

const Home: FC<IHome> = props => {
  return (
    <SiteLayout background={'#F6FAFF'}>
      <div className={styles.home}>
        <section className={[styles.home__mainScreen, styles.mainScreen].join(' ')}>
          <div className="mainScreen__container">
            <div className={styles.mainScreen__wrapper}>
              <div className={styles.mainScreen__search}>
                <div className={styles.mainScreen__search_content}>
                  <div className={styles.mainScreen__search_input}>
                    <input type="text" placeholder="Должность или предприятие" />
                  </div>
                  <div className={styles.mainScreen__search_filter}>
                    <LuSettings2 size={20} style={{ color: '#454B54' }} />
                  </div>
                  <div className={styles.mainScreen__search_button}>Найти</div>
                </div>
                <div className={styles.mainScreen__employee}>Я ищу сотрудника</div>
              </div>
              <div className={styles.mainScreen__bottom}>
                <div className={styles.mainScreen__statistics}>
                  <div className={styles.mainScreen__statistics_block}>
                    <h3 className={styles.mainScreen__statistics_count}>2103</h3>
                    <p className={styles.mainScreen__statistics_text}>вакансии</p>
                  </div>
                  <div className={styles.mainScreen__statistics_block}>
                    <h3 className={styles.mainScreen__statistics_count}>523</h3>
                    <p className={styles.mainScreen__statistics_text}>резюме</p>
                  </div>
                </div>
                <div className={styles.mainScreen__arrow}>
                  <IoIosArrowDown style={{ color: '#fff' }} size={40} />
                </div>
                <div className={styles.mainScreen__button}>Создать резюме</div>
              </div>
            </div>
          </div>
        </section>

        <section className={[styles.home__ribbon, styles.ribbon].join(' ')}>
          <div className="ribbon__container">
            <div className={styles.ribbon__wrapper}>
              <div className={styles.ribbon__vacansiesList}>
                <div className={styles.ribbon__vacansiesTop}>
                  <h3 className={styles.ribbon__vacansiesTop_count}>Найдено 5 вакансий</h3>
                  <div className={styles.ribbon__vacansiesTop_filter}>Фильтр</div>
                </div>
                <VacanciesCard
                  _id={1}
                  title={'Швея'}
                  salary={'от 30 000 руб.'}
                  description={
                    'Вот уже 20 лет мы шьём чехлы для салонов автомобилей, всегда поддерживая качество на высоком уровне. В связи с этим у нас всё больше клиентов. И нашему производству требуется швея.'
                  }
                  tags={['Вакансия недели', 'Студенты', 'Пенсионерам']}
                  company={'ООО Легпром'}
                  adress={'Симферополь, Учебный переулок 8'}
                  phone={'+7978754645'}
                />
                <VacanciesCard
                  _id={1}
                  title={'Швея'}
                  salary={'от 30 000 руб.'}
                  description={
                    'Вот уже 20 лет мы шьём чехлы для салонов автомобилей, всегда поддерживая качество на высоком уровне. В связи с этим у нас всё больше клиентов. И нашему производству требуется швея.'
                  }
                  tags={['Вакансия недели', 'Студенты']}
                  company={'ООО Легпром'}
                  adress={'Симферополь, Учебный переулок 8'}
                  phone={'+7978754645'}
                />
                <VacanciesCard
                  _id={1}
                  title={'Швея'}
                  salary={'от 30 000 руб.'}
                  description={
                    'Вот уже 20 лет мы шьём чехлы для салонов автомобилей, всегда поддерживая качество на высоком уровне. В связи с этим у нас всё больше клиентов. И нашему производству требуется швея.'
                  }
                  tags={['Вакансия недели', 'Студенты']}
                  company={'ООО Легпром'}
                  adress={'Симферополь, Учебный переулок 8'}
                  phone={'+7978754645'}
                />
                <VacanciesCard
                  _id={1}
                  title={'Швея'}
                  salary={'от 30 000 руб.'}
                  description={
                    'Вот уже 20 лет мы шьём чехлы для салонов автомобилей, всегда поддерживая качество на высоком уровне. В связи с этим у нас всё больше клиентов. И нашему производству требуется швея.'
                  }
                  tags={['Вакансия недели', 'Студенты']}
                  company={'ООО Легпром'}
                  adress={'Симферополь, Учебный переулок 8'}
                  phone={'+7978754645'}
                />
                <VacanciesCard
                  _id={1}
                  title={'Швея'}
                  salary={'от 30 000 руб.'}
                  description={
                    'Вот уже 20 лет мы шьём чехлы для салонов автомобилей, всегда поддерживая качество на высоком уровне. В связи с этим у нас всё больше клиентов. И нашему производству требуется швея.'
                  }
                  tags={['Вакансия недели', 'Студенты']}
                  company={'ООО Легпром'}
                  adress={'Симферополь, Учебный переулок 8'}
                  phone={'+7978754645'}
                />
                <div className={styles.ribbon__showVacancies}>Показать еще</div>
              </div>

              <aside className={styles.ribbon__ad}>
                <Link href="/employer">
                  <Image src={ad} alt={'Реклама'} />
                </Link>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  )
}

export default Home
