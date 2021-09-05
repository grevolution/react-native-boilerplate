module.exports = {
  type: 'confirm',
  name: 'value', // Always use value
  message: 'Using typescript ?', // Will be override
  onRender(kleur) {
    this.msg = kleur.cyan(`📘 Using typescript ? ${kleur.gray('(Y/n)')} \n\n`)
  },
  initial: true,
}
