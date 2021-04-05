import TheNavbar from '@/shared/TheNavbar.vue'
import { MountingOptions, shallowMount } from '@vue/test-utils'

const createMountingOptions = (): MountingOptions<{ [key: string]: unknown }> => ({
  global: {
    stubs: ['router-link']
  }
})

describe('TheNavbar', () => {
  // template test example
  it('should nav-hamburge an XPTO button', async () => {
    const wrapper = shallowMount(TheNavbar, createMountingOptions())

    const navHamburger = wrapper.find('.text__nav-hamburger')

    expect(navHamburger.exists()).toBeTruthy()
  })

  it('should toggle the hidden class in nav-links by clicking on the nav-hamburger button', async () => {
    const wrapper = shallowMount(TheNavbar, createMountingOptions())

    const navLinks = wrapper.find('.test__nav-links')
    const navHamburger = wrapper.find('.text__nav-hamburger')

    await navHamburger.trigger('click')
    expect(navLinks.classes().includes('hidden')).toBeFalsy()

    await navHamburger.trigger('click')
    expect(navLinks.classes().includes('hidden')).toBeTruthy()
  })
})
