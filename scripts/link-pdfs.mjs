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
        const pdfLink = `[📄 View PDF](./${pdfName})`

        if (!content.includes(pdfLink)) {
          content = content.trimEnd() + `\n\n---\n${pdfLink}\n`
          fs.writeFileSync(fullPath, content, 'utf8')
          console.log(`✅ Linked PDF in: ${entry.name}`)
        }
      }
    }
  }
}

scanDir(contentDir)
console.log('Done linking PDFs.')