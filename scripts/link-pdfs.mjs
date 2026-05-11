import fs from 'fs'
import path from 'path'

const contentDir = path.resolve('content')

function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      scanDir(fullPath)
    } else if (entry.name.endsWith('.md')) {
      const pdfPath = fullPath.replace(/\.md$/, '.pdf')
      const pdfName = entry.name.replace(/\.md$/, '.pdf')

      if (fs.existsSync(pdfPath)) {
        let content = fs.readFileSync(fullPath, 'utf8')

        // Remove any old PDF link lines first
        content = content.replace(/\n---\n\[.*?View PDF\].*?\n/g, '')
        content = content.replace(/\[📄 View PDF\].*?\n/g, '')

        const pdfLink = `[View PDF](./${pdfName})`
        content = content.trimEnd() + `\n\n---\n${pdfLink}\n`
        fs.writeFileSync(fullPath, content, 'utf8')
        console.log(`✅ Linked PDF in: ${entry.name}`)
      }
    }
  }
}

scanDir(contentDir)
console.log('Done linking PDFs.')