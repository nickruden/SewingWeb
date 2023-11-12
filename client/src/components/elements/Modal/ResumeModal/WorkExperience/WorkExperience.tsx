import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Select from 'react-select'

import styles from './WorkExperience.module.scss'

import ResumeModal from '@/components/elements/Modal/ResumeModal/Layout/ResumeModal'
import FieldProfile from '@/components/ui/FieldProfile/FieldProfile'

import { IWorkExperience } from '@/core/types/work-experience.interface'

import { mouth } from '@/core/utils/select-resume-data'

interface Props {
  resumeId: number | undefined
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
}

const WorkExperience: FC<Props> = ({ resumeId, active, setActive }) => {
  const [monthStart, setMonthStart] = useState<string>('')
  const [yearStart, setYearStart] = useState<string>('')
  const [combineStart, setCombineStart] = useState<string>('')

  useEffect(() => {
    setCombineStart(`${monthStart} ${yearStart}`)
  }, [monthStart, monthStart])

  const [monthEnd, setMonthEnd] = useState<string>('')
  const [yearEnd, setYearEnd] = useState<string>('')
  const [combineEnd, setCombineEnd] = useState<string>('')

  useEffect(() => {
    setCombineEnd(`${monthEnd} ${yearEnd}`)
  }, [monthEnd, yearEnd])

  const handleYearStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYearStart(e.target.value)
  }

  const handleYearEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYearEnd(e.target.value)
  }

  // ========== REACT HOOK FORM =============================

  // save error server
  const [errorUpdate, setErrorUpdate] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors }
  } = useForm<IWorkExperience>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<IWorkExperience> = async data => {
    console.log(data)
  }

  const handleCancel = () => {
    reset()
    setActive(false)
  }

  return (
    <ResumeModal active={active} setActive={setActive}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.workExperience}>
        <div className={styles.workExperience__formContent}>
          <h2 className={styles.workExperience__titleModal}>Добавить место работы</h2>
          <FieldProfile
            {...register('city', {
              required: 'Укажите учебное заведение'
            })}
            type={'text'}
            title={'Город'}
            star={true}
            error={errors.city?.message}
          />
          <FieldProfile
            {...register('company', {
              required: 'Укажите название компании'
            })}
            type={'text'}
            title={'Город'}
            star={true}
            error={errors.company?.message}
          />
          <FieldProfile
            {...register('post', {
              required: 'Укажите должность'
            })}
            type={'text'}
            title={'Должность'}
            star={true}
            error={errors.post?.message}
          />

          <div className={styles.workExperience__dateBlock}>
            <div className={styles.workExperience__dateLabel}>
              <span>Начало работы</span>
              <span className={styles.workExperience__required}>*</span>
            </div>
            <div className={styles.workExperience__inputs}>
              <Controller
                name="startTime"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <>
                    <Select
                      classNamePrefix="custom-select"
                      options={mouth ? mouth : []}
                      isMulti={false}
                      isSearchable={false}
                      placeholder="Месяц"
                      onChange={selectedOption => {
                        if (selectedOption) {
                          field.onChange(`${selectedOption.value}.${yearStart}`)
                        }
                      }}
                      styles={{
                        control: (provided, state) => ({
                          ...provided,
                          borderColor: errors.startTime ? '#EB0000' : provided.borderColor
                        })
                      }}
                    />
                    <input
                      type="number"
                      placeholder="Год"
                      onChange={e => handleYearStartChange(e)}
                      style={errors.startTime ? { borderColor: 'red' } : undefined}
                    />
                    {errors.startTime && <span className={styles.education__error}>Укажите дату начало работы</span>}
                  </>
                )}
              />
            </div>
          </div>

          <div className={styles.workExperience__dateBlock}>
            <div className={styles.workExperience__dateLabel}>
              <span>Конец работы</span>
              <span className={styles.workExperience__required}>*</span>
            </div>
            <div className={styles.workExperience__inputs}>
              <Controller
                name="endTime"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <>
                    <Select
                      classNamePrefix="custom-select"
                      options={mouth ? mouth : []}
                      isMulti={false}
                      isSearchable={false}
                      placeholder="Месяц"
                      onChange={selectedOption => {
                        if (selectedOption) {
                          field.onChange(`${selectedOption.value}.${yearEnd}`)
                        }
                      }}
                      styles={{
                        control: (provided, state) => ({
                          ...provided,
                          borderColor: errors.endTime ? '#EB0000' : provided.borderColor
                        })
                      }}
                    />
                    <input
                      type="number"
                      placeholder="Год"
                      onChange={e => handleYearEndChange(e)}
                      style={errors.endTime ? { borderColor: 'red' } : undefined}
                    />
                    {errors.endTime && <span className={styles.education__error}>Укажите дату начало работы</span>}
                  </>
                )}
              />
            </div>
          </div>

          <div className={styles.workExperience__block}>
            <div className={styles.workExperience__label}>Обязанности, функции и достижения</div>
            <div className={styles.workExperience__textarea}>
              <textarea {...register('experience')}></textarea>
            </div>
          </div>
        </div>

        <div className={styles.workExperience__modalFooter}>
          <button className={styles.workExperience__saveButton}>Сохранить</button>
          <div className={styles.workExperience__resetButton} onClick={handleCancel}>
            Отменить
          </div>
          <span className={styles.workExperience__footerError}>{errorUpdate}</span>
        </div>
      </form>
    </ResumeModal>
  )
}

export default WorkExperience
